declare global {
  interface Group {
    dateCreated: string
    groupCode: string
    groupDescription: string
    groupId: number
    groupName: string
    groupOwnerId: number
  }
  interface List {
    claimedId: number
    dateModified: string
    description: string
    groupId: number
    listCompleted: boolean
    listId: number
    listName: string
  }
  interface Item {
    dateModified: string
    groupId: number
    itemId: number
    itemName: string
    lastModifier: number
    listId: number
    quantity: number
    status: boolean
  }
  interface User {
    authorities: {name: string}[]
    id: number
    username: string
  }
}

export {}
