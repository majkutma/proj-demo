import getGitBranchName from 'current-git-branch'
import { RESOURCE_PREFIX, STACK_PREFIX, BRANCH_NAME_DEFAULT, RESOURCE_ID_DEFAULT } from '../constants/proj-info'

const gitBranchName = getGitBranchName()
const sanitizeString = (s: string): string => {
  return s.replace(/[^a-z0-9-]/gi, '-')
}
export const getBranchName = (): string => {
  const branchName = (gitBranchName ?? BRANCH_NAME_DEFAULT)
  if (typeof branchName === 'string') {
    return branchName
  }
  return BRANCH_NAME_DEFAULT
}
const getBranchId = (): string => {
  const branchId = getBranchName()
  return ((branchId === 'main') ? branchId : sanitizeString(branchId))
}
export const getStackId = (): string => {
  const branchId = getBranchId()
  if (branchId.length !== 0) {
    return STACK_PREFIX + '-' + branchId
  }
  return STACK_PREFIX + '-' + BRANCH_NAME_DEFAULT
}
export const getResourceId = (resourcSlug: string): string => {
  if (resourcSlug.length === 0) {
    throw new Error('Missing Resource Id!')
  }
  if (resourcSlug.length > 32) {
    throw new Error('Resource Id must not be onger than 32 characters!')
  }
  const branchId = getBranchId()
  if (typeof branchId === 'string') {
    return [RESOURCE_PREFIX, branchId.substring(0, 31), resourcSlug]
      .join('-')
      .replace('--', '-')
      .substring(0, 63)
  }
  return RESOURCE_ID_DEFAULT
}
