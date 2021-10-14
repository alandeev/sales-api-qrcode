export const validateGroups = (userGroups: string[], requiredGroups: string[]) => {
 const hasPermission = userGroups.some(userGroup => {
   return requiredGroups.includes(userGroup)
 })

 return hasPermission
}