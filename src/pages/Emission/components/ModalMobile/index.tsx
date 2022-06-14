import { Stack } from "@mui/material";
import { CustomizedButton } from "../../../../shared/components/CustomizedButton";

import { Emission } from "../../../../types/emission";
import { EmissionInformation } from "../EmissionInformation";
import { StyledCard, StyledTitle } from "./styles";

interface ModalMobileProps {
    emission: Emission;
    onDelete: (emission: Emission) => void;
    onCancel: () => void;
}

export function ModalMobile({
    emission,
    onDelete,
    onCancel,
}: ModalMobileProps) {
    const handleDelete = () => {
        onDelete(emission);
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <StyledCard>
            {emission != null && (
                <Stack direction="column" spacing={5} width="100%">
                    <Stack mb={2}>
                        <StyledTitle>Emission</StyledTitle>
                    </Stack>
                    <EmissionInformation label="Title" value={emission.title} />
                    <EmissionInformation
                        label="Category"
                        value={emission.subcategory?.category}
                    />
                    <EmissionInformation
                        label="Subcategory"
                        value={emission.subcategory?.name}
                    />
                    <EmissionInformation
                        label="Registration Date"
                        value={emission.date}
                    />
                    <EmissionInformation
                        label="Quantity"
                        value={`${emission.co2Emission?.toFixed(3)} kgCO2eq`}
                    />
                    <Stack
                        direction="column"
                        mt={5}
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        bottom="5%"
                        position="absolute"
                        mb={3}
                        width="80%"
                    >
                        <CustomizedButton
                            color="error"
                            borderRadius="1.5rem"
                            onClick={handleDelete}
                        >
                            Delete emission
                        </CustomizedButton>
                        <CustomizedButton
                            variant="text"
                            color="secondary"
                            borderRadius="1.5rem"
                            onClick={handleCancel}
                        >
                            Cancel
                        </CustomizedButton>
                    </Stack>
                </Stack>
            )}
        </StyledCard>
    );
}
