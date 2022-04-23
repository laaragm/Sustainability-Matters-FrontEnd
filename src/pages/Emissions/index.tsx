import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";

import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { CardContent } from "./components/CardContent";
import { useEmissions } from "../../hooks/useEmissions";
import { StyledCard, StyledStack } from "./styles";
import { Emission } from "../../types/emission";
import { PATHS } from "../../routes/paths";

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
        console.log(route);
        navigate(route);
    };

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
                                    onMonthClick={handleClickOnMonth}
                                />
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
