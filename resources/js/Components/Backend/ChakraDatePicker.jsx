import { useColorMode } from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/date-picker.css';

// const CustomDateInput = forwardRef(({ value, onClick, onChange }, ref) => (
//     <Input
//         placeholder="Description"
//         onClick={onClick}
//         value={value}
//         ref={ref}
//         type="date"
//         onChange={onChange}
//     />
// ));

const ChakraDatePicker = ({
	selectedDate,
	isClearable = true,
	showPopperArrow = false,
	dateFormat = 'dd-MM-yyyy',
	// customInput = { CustomDateInput },
	...props
}) => {
	const isLight = useColorMode().colorMode === 'light'; //you can check what theme you are using right now however you want
	return (
		// if you don't want to use chakra's colors or you just wwant to use the original ones,
		// set className to "light-theme-original" ↓↓↓↓
		<div className={isLight ? 'light-theme' : 'dark-theme'}>
			<ReactDatePicker
				selected={selectedDate}
				isClearable={isClearable}
				showPopperArrow={showPopperArrow}
				dateFormat={dateFormat}
				className="react-datapicker__input-text" //input is white by default and there is no already defined class for it so I created a new one
				{...props}
			/>
		</div>
	);
};

export default ChakraDatePicker;
