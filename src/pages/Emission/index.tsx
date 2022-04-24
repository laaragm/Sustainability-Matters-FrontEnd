import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";

import { CardContent } from "./components/CardContent";
import { PATHS } from "../../routes/paths";
import { useEmission } from "../../hooks/useEmission";
import { StyledCard, StyledStack } from "./styles";

export default function Emission() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { data, isLoading } = useEmission(1);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [date, setDate] = useState("");

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

    const handleClickOnRow = (date: Date) => {};

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
                        dataLength={9} // TODO: Change this
                        scrollableTarget="scrollable-element"
                        style={{ overflow: "inherit" }}
                    >
                        <Stack direction="column" width="70vw">
                            {!isLoading && data?.emissions != undefined && (
                                // @ts-ignore
                                <CardContent
                                    emissions={data?.emissions}
                                    date={date}
                                    onRowClick={handleClickOnRow}
                                />
                            )}
                        </Stack>
                    </InfiniteScroll>
                </StyledStack>
            </StyledCard>
        </Stack>
    );
}
