import PageLayout from "@/components/layout/PageLayout"
import { EmptyState, Flex, VStack } from "@chakra-ui/react"
import type { JSX } from "@emotion/react/jsx-runtime"
import { TbZoomQuestion } from "react-icons/tb";

export const EmptySearh = () => {
   return (<Flex w="100%" alignItems="center">
      <EmptyState.Root>
         <EmptyState.Content>
            <EmptyState.Indicator>
               <TbZoomQuestion />
            </EmptyState.Indicator>
            <VStack>
               <EmptyState.Title>Товары не найдены</EmptyState.Title>
            </VStack>
         </EmptyState.Content>
      </EmptyState.Root>
   </Flex>)
}

export const EmptyPage = ({ title, icon, description }: { title: string, icon: JSX.Element, description?: JSX.Element }) => {
   return (<PageLayout>
      <Flex h="100svh" w="100%" alignItems="center">
         <EmptyState.Root>
            <EmptyState.Content>
               <EmptyState.Indicator>
                  {icon}
               </EmptyState.Indicator>
               <VStack>
                  <EmptyState.Title>{title}</EmptyState.Title>
                  {description && <EmptyState.Description>
                     {description}
                  </EmptyState.Description>}
               </VStack>
            </EmptyState.Content>
         </EmptyState.Root>
      </Flex>
   </PageLayout>)
}