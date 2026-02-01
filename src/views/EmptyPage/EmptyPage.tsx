import PageLayout from "@/components/layout/PageLayout"
import { EmptyState, Flex, VStack } from "@chakra-ui/react"
import type { JSX } from "@emotion/react/jsx-runtime"

const EmptyPage = ({ title, icon, description }: {title: string, icon: JSX.Element, description?: JSX.Element}) => {
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

export default EmptyPage