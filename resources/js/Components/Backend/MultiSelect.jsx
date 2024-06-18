import { Select } from 'chakra-react-select';

const ControlledMultiSelect = ({ name, options, value, ...props }) => {
	return (
		<Select
			isMulti
			name={name}
			options={options}
			value={value}
			variant="filled"
			tagVariant="solid"
			colorScheme="blue"
			selectedOptionStyle="color"
			selectedOptionColorScheme="blue"
			{...props}
		/>
	);
};

export default ControlledMultiSelect;
