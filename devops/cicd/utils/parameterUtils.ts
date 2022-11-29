import { STACK_PREFIX, BRANCH_NAME_DEFAULT } from '../constants/resourceNames'
import getGitBranchName from 'current-git-branch'

// type BrType = CurrentGitBranchResult | string

const sanitizeString = (s: string): string => {
  return s.replace(/[^a-z0-9-]/gi, '-')
}
const gitBranchName = getGitBranchName()
const getBranchName = (): string => {
  const branchName = (JSON.stringify(gitBranchName) ?? BRANCH_NAME_DEFAULT)
  return branchName
}

const getBranchId = (): string => {
  return sanitizeString(getBranchName())
}

export const getStackId = (): string | null => {
  const resourceId = getBranchId()
  if (resourceId.length !== 0) {
    return STACK_PREFIX + '-' + resourceId
  }
  return null
}
