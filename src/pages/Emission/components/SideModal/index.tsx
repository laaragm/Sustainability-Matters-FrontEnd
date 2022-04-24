import { Stack } from "@mui/material";
import { CustomizedButton } from "../../../../shared/components/CustomizedButton";

import { Emission } from "../../../../types/emission";
import { EmissionInformation } from "../EmissionInformation";
import { StyledCard, StyledTitle } from "./styles";

interface SideModalProps {
    emission: Emission;
    onDelete: (emission: Emission) => void;
    onCancel: () => void;
}

export function SideModal({ emission, onDelete, onCancel }: SideModalProps) {
    const handleDelete = () => {
        onDelete(emission);
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <StyledCard>
            {emission != null && (
                <Stack direction="column" spacing={3}>
                    <StyledTitle>Emission</StyledTitle>
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
                        value={`${emission.co2Emission} kgCO2eq`}
                    />
                    <Stack
                        direction="column"
                        mt={5}
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <CustomizedButton
                            color="error"
                            fullWidth
                            borderRadius="1.5rem"
                            onClick={handleDelete}
                        >
                            Delete emission
                        </CustomizedButton>
                        <CustomizedButton
                            variant="text"
                            color="secondary"
                            borderRadius="1.5rem"
                            fullWidth
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
