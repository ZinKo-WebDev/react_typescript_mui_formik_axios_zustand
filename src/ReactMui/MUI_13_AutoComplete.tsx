import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MUI_13_AutoComplete = () => {
    const skills = ['HTML', 'CSS', 'JS', 'PHP', 'Laravel', 'React'];
    const [value, setValue] = useState<string | null>(null);

    const onChangeHandler = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setValue(newValue);
    };

    type Item = {
        id: number;
        label: string;
    };

    const items = ['Apple', 'Mango', 'Orange', 'Banana', 'Kiwi'];
    const [itemsState, setItemsState] = useState<Item | null>(null);

    const onChangeItemHandler = (event: any, newValueItem: Item | null) => {
        setItemsState(newValueItem);
    };

    // Convert items array to Item[] format
    const itemOptions: Item[] = items.map((item, index) => ({
        id: index + 1,
        label: item
    }));

    return (
        <div>
            <Stack spacing={2} width='300px'>
                <Autocomplete
                    options={skills}
                    renderInput={(params) => <TextField {...params} label='Skills' />}
                    value={value}
                    onChange={onChangeHandler}
                />
            </Stack>
<br />
            <Stack spacing={2} width='300px'>
                <Autocomplete
                    options={itemOptions}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => <TextField {...params} label='Items' />}
                    value={itemsState}
                    onChange={onChangeItemHandler}
                />
            </Stack>
        </div>
    );
};

export default MUI_13_AutoComplete;
