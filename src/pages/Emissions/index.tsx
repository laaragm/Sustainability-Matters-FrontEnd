import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";

import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { CardContent } from "./components/CardContent";
import { useEmissions } from "../../hooks/useEmissions";
import { PATHS } from "../../routes/paths";
import { StyledCard, StyledStack } from "./styles";

export default function Emissions() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { data, isLoading } = useEmissions(1);
    const [hasMoreData, setHasMoreData] = useState(true);

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

    const handleClickOnMonth = (date: Date) => {
        const route = `${
            PATHS.emissions.route
        }/${date.getMonth()}-${date.getFullYear()}`;
        navigate(route);
    };

    const handleAddEmission = () => {
        navigate(PATHS.addEmission.route);
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
            width="100%"
        >
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
                        <Stack direction="column" width="70vw">
                            {!isLoading && data?.emissions != undefined && (
                                // @ts-ignore
                                <CardContent
                                    emissions={data?.emissions}
                                    onMonthClick={handleClickOnMonth}
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
                    onClick={handleAddEmission}
                >
                    + Add emission
                </CustomizedButton>
            </Stack>
        </Stack>
    );
}
