import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { CardContent } from "./components/CardContent";
import { useEmissions } from "../../hooks/useEmissions";
import { StyledCard, StyledStack } from "./styles";
import { CircularProgress } from "@mui/material";

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
            width="100%"
            height="100%"
        >
            <CircularProgress color="inherit" />
        </Stack>
    );

    return (
        <Stack
            direction={isMobile ? "row" : "column"}
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 0 : 5}
            mt={isMobile ? 6 : 5}
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
                    spacing={3}
                >
                    <InfiniteScroll
                        next={onScroll}
                        hasMore={hasMoreData}
                        loader="Loading..." // TODO: Change this
                        dataLength={9} // TODO: Change this
                        scrollableTarget="scrollable-element"
                        style={{ overflow: "inherit", width: "100%" }}
                    >
                        <Stack direction="column" width="100%">
                            {!isLoading && data?.emissions != undefined && (
                                // @ts-ignore
                                <CardContent emissions={data?.emissions} />
                            )}
                        </Stack>
                    </InfiniteScroll>
                </StyledStack>
            </StyledCard>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="end"
                spacing={1}
                pt={5}
            >
                <CustomizedButton
                    color="secondary"
                    borderRadius="1.5rem"
                    onClick={() => {}}
                >
                    Add
                </CustomizedButton>
            </Stack>
        </Stack>
    );
}
