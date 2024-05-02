import { LightPatternBox } from "@/Components/Frontend/styles/pattern-box";
import { Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";

 const CategoryLayout = ({
     children,
     showBackgroundPattern = false,
     image,
     headingColor,
     category,
 }) => {
     return (
         <LightPatternBox showPattern={showBackgroundPattern} pt="0">
             <Box pos="relative">
                 {image !== null ? (
                     <Box
                         height="350px"
                         _after={{
                             display: "block",
                             content: '""',
                             width: "100%",
                             background: "rgba(0,0,0,0.4)",
                             position: "absolute",
                             top: 0,
                             left: 0,
                             bottom: 0,
                             right: 0,
                         }}
                     >
                         <Box
                             as={Image}
                             boxSize="100%"
                             objectFit="cover"
                             src={image}
                         />
                     </Box>
                 ) : (
                     <Box
                         pos="relative"
                         height="350px"
                         zIndex={0}
                         _before={{
                             content: `""`,
                             width: "100%",
                             height: "100%",
                             position: "absolute",
                             top: 0,
                             left: 0,
                             zIndex: -1,
                             display: "block",
                             opacity: 0.4,
                             borderBottom: "1px solid ",
                             borderColor: useColorModeValue(
                                 "gray.400",
                                 "gray.500"
                             ),
                             bgSize: "1018px",
                             bgPos: "top center",
                             bgImage: useColorModeValue(
                                 `url(/assets/pattern-tile-green.svg)`,
                                 `url(/assets/pattern-tile-light-fade.svg)`
                             ),
                         }}
                     />
                 )}

                 <Box
                     textAlign="center"
                     mt={{ base: "20px", lg: "4rem" }}
                     px={{ base: "32px", md: "0" }}
                     color={headingColor}
                     position="absolute"
                     bottom="15%"
                     left="15%"
                 >
                     <Heading
                         as="h1"
                         fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
                         mt="30px"
                         mb={{ base: "20px", lg: "32px" }}
                         textTransform="capitalize"
                     >
                         {category.name}
                     </Heading>
                 </Box>
             </Box>

             {children}
         </LightPatternBox>
     );
 };

export default CategoryLayout;
