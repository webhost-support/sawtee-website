// import { SocialMenu } from '@/components/Frontend/header/social-menu';
// import {
//   Box,
//   Collapse,
//   Flex,
//   Icon,
//   Stack,
//   Text,
//   useColorModeValue,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { Link } from '@inertiajs/react';
// import React from 'react';

// const MenuLink = ({ title, url, index, isOpen, ...rest }) => {
//   return (
//     <Link
//       href={url}
//       display="flex"
//       transition="all 0.3s"
//       padding="10px"
//       textDecor="none"
//       _hover={{
//         textDecor: 'none',
//       }}
//       {...rest}
//     >
//       <Text>
//         <Box as="span" pr={'10'}>
//           {index + ' ' + '|'}
//         </Box>
//         {title}
//       </Text>
//     </Link>
//   );
// };

// const DropDownMenu = ({ menuItem, index, padding = '10px', size = 'md' }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} w="full">
//       <Flex
//         as="li"
//         role="group"
//         listStyleType="none"
//         borderBottom="1px solid"
//         _hover={{
//           bg: useColorModeValue('whiteAlpha.600', 'blackAlpha.600'),
//         }}
//         _focus={{
//           bg: `rgba(0, 0, 0, 0.2)`,
//         }}
//         fontWeight="bold"
//         fontSize={size}
//         onClick={menuItem.children && onToggle}
//         borderColor={useColorModeValue('gray.500', 'whiteAlpha.500')}
//         justifyContent="space-between"
//         alignItems="center"
//         gap={4}
//       >
//         <MenuLink
//           p={padding}
//           title={menuItem.title}
//           url={menuItem.url}
//           index={`0${index + 1}`}
//           isOpen={false}
//           justifyContent="space-between"
//           alignItems="center"
//           _hover={{
//             textDecoration: 'none',
//           }}
//         />

//         {menuItem.children && (
//           <Box w="16" flex={1} onClick={onToggle}>
//             <Icon
//               as={ChevronDownIcon}
//               transition={'all .25s ease-in-out'}
//               transform={isOpen ? 'rotate(180deg)' : ''}
//               w={6}
//               h={6}
//             />
//           </Box>
//         )}
//       </Flex>

//       <Collapse
//         in={isOpen}
//         animateOpacity
//         transition={{
//           exit: { duration: 0.5, delay: 0.3 },
//           enter: { duration: 0.5 },
//         }}
//         style={{ marginTop: '0!important', overflowY: 'scroll' }}
//       >
//         <Stack
//           pl={4}
//           ml={4}
//           borderLeft={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.600', 'gray.200')}
//           align={'start'}
//         >
//           {menuItem.children &&
//             menuItem.children.map((child, index) => (
//               <React.Fragment key={child.title}>
//                 <DropDownMenu
//                   menuItem={child}
//                   index={index}
//                   padding={'5px'}
//                   size="sm"
//                 />
//               </React.Fragment>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// const MobileMenu = ({
//   menu = null,
//   showSocialLinks = false,
//   socialLinks = null,
// }) => {
//   return (
//     <Stack
//       bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.600')}
//       p={4}
//       display={{ md: 'none' }}
//     >
//       {menu &&
//         menu.map((menuItem, index) => (
//           <React.Fragment key={menuItem.title}>
//             <DropDownMenu menuItem={menuItem} index={index} />
//           </React.Fragment>
//         ))}
//       {showSocialLinks && (
//         <Box marginTop={5} mx="auto" p={5}>
//           <SocialMenu ml="0" menu={socialLinks} />
//         </Box>
//       )}
//     </Stack>
//   );
// };

// export default MobileMenu;
