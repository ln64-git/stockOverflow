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
    listCompletedw: boolean
    listId: number
    listName: string
  }
}

export {}
