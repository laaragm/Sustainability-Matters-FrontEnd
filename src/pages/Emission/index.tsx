import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import { CardContent } from "./components/CardContent";
import { useEmission } from "../../hooks/useEmission";
import { Emission as EmissionType } from "../../types/emission";
import { StyledCard, StyledStack } from "./styles";
import { SideModal } from "./components/SideModal";
import { ModalMobile } from "./components/ModalMobile";
import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { PATHS } from "../../routes/paths";

export default function Emission() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const url = new URL(window.location.href);
    const dateParam = useMemo(() => {
        return url.pathname.split("/")[url.pathname.split("/")?.length - 1];
    }, [url]);
    const { data, isLoading } = useEmission(dateParam);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [date, setDate] = useState("");
    const [selectedEmission, setSelectedEmission] =
        useState<EmissionType | null>(null);

    useEffect(() => {
        defineDate();
    }, []);

    const defineDate = () => {
        const value = window.location.href.substring(
            window.location.href.lastIndexOf("/") + 1
        );
        if (value != undefined) {
            const month = +value.split("-")[0];
            const year = +value.split("-")[1];
            const newDate = new Date(year, month, 1).toLocaleDateString("en", {
                month: "long",
                year: "numeric",
            });
            setDate(newDate);
        }
    };

    // TODO: Adjust this
    const onScroll = () => {
        setHasMoreData(false);
    };

    const Loader = (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="70vw"
            height="55vh"
        >
            <CircularProgress color="inherit" />
        </Stack>
    );

    const handleClickOnRow = (emission: EmissionType) => {
        setSelectedEmission(emission);
    };

    const handleCancel = () => {
        setSelectedEmission(null);
    };

    const handleDelete = (emission: EmissionType) => {
        setSelectedEmission(null);
    };

    const handleGoBackToList = () => {
        navigate(PATHS.emissions.route);
    };

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 2 : 3}
            m={isMobile ? 0 : 5}
            mt={isMobile ? 8 : 5}
            height="100%"
            width={selectedEmission != null ? "85%" : "100%"}
        >
            {(!isMobile || selectedEmission == null) && (
                <>
                    <StyledCard isMobile={isMobile}>
                        <StyledStack
                            id="scrollable-element"
                            direction="row"
                            width="100%"
                            height="100%"
                            justifyContent="space-between"
                            spacing={isMobile ? 1 : 3}
                        >
                            <InfiniteScroll
                                next={onScroll}
                                hasMore={hasMoreData}
                                loader={Loader}
                                dataLength={data?.totalCount || 0}
                                scrollableTarget="scrollable-element"
                                style={{ overflow: "inherit" }}
                            >
                                <Stack
                                    direction="column"
                                    width={
                                        selectedEmission != null
                                            ? "60vw"
                                            : "70vw"
                                    }
                                >
                                    {!isLoading &&
                                        data?.emissions != undefined && (
                                            // @ts-ignore
                                            <CardContent
                                                data={data}
                                                date={date}
                                                isMobile={isMobile}
                                                onRowClick={handleClickOnRow}
                                            />
                                        )}
                                </Stack>
                            </InfiniteScroll>
                        </StyledStack>
                    </StyledCard>
                    <Stack
                        width={isMobile ? "90%" : "80%"}
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        spacing={1}
                    >
                        <CustomizedButton
                            color="secondary"
                            borderRadius="1.5rem"
                            onClick={handleGoBackToList}
                        >
                            Go back to list
                        </CustomizedButton>
                    </Stack>
                </>
            )}
            {selectedEmission != null && (
                <>
                    {isMobile ? (
                        <ModalMobile
                            emission={selectedEmission}
                            onCancel={handleCancel}
                            onDelete={handleDelete}
                        />
                    ) : (
                        <SideModal
                            emission={selectedEmission}
                            onCancel={handleCancel}
                            onDelete={handleDelete}
                        />
                    )}
                </>
            )}
        </Stack>
    );
}
