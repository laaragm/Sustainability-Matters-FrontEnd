import { useState } from "react";
import { useMutation } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    CircularProgress,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { Food } from "../../types/foodItem";
import { useFood } from "../../hooks/useFood";
import { CardContent } from "./components/CardContent";
import { SideModal } from "./components/SideModal";
import { StyledCard, StyledStack } from "./styles";

export default function FoodPage() {
    const { data, isLoading } = useFood();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [openSideModal, setOpenSideModal] = useState(false);
    const [selectedFood, setSelectedFood] = useState<Food | null>(null);

    const handleCreateNewRecord = () => {
        setOpenSideModal(true);
    };

    const handleFood = (food: Food) => {
        setSelectedFood(food);
        setOpenSideModal(true);
    };

    const handleCloseModal = () => {
        setSelectedFood(null);
        setOpenSideModal(false);
    };

    const handleDelete = async (item: Food) => {
        await deleteItem.mutateAsync(item);
    };

    const deleteItem = useMutation(
        async (item: Food) => {
            console.log(item);
            const response = await api.delete(`/food/${item.foodType}`);
            return response.data.json;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("food");
                handleCloseModal();
            },
        }
    );

    const handleSave = async (item: Food, isCreate: boolean) => {
        try {
            if (isCreate) {
                await createFoodItem.mutateAsync(item);
            } else {
                await updateFoodItem.mutateAsync(item);
            }
            handleCloseModal();
        } catch (error) {
            console.log(error);
        }
    };

    const createFoodItem = useMutation(
        async (item: Food) => {
            const response = await api.post("/food/", item, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data.json;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("food");
            },
        }
    );

    const updateFoodItem = useMutation(
        async (item: Food) => {
            console.log("UPDATE: ", item);
            // @ts-ignore
            const response = await api.put(`/food/${item.food_type}`, item);
            return response.data.json;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("food");
            },
        }
    );

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

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 2 : 3}
            m={isMobile ? 0 : 5}
            mt={isMobile ? 8 : 5}
            height="100%"
            width={openSideModal ? "85%" : "100%"}
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
                        next={() => {}}
                        hasMore={false}
                        loader={Loader}
                        dataLength={data?.foodItems?.length || 0}
                        scrollableTarget="scrollable-element"
                        style={{ overflow: "inherit" }}
                    >
                        <Stack direction="column" width="70vw">
                            {!isLoading && data?.foodItems != undefined && (
                                <CardContent
                                    foodItems={data?.foodItems}
                                    isMobile={isMobile}
                                    onClick={handleFood}
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
                    onClick={handleCreateNewRecord}
                >
                    + Add CO2 emission factor
                </CustomizedButton>
            </Stack>
            {openSideModal && (
                <SideModal
                    food={selectedFood}
                    onCancel={handleCloseModal}
                    onDelete={handleDelete}
                    onSave={handleSave}
                />
            )}
        </Stack>
    );
}
