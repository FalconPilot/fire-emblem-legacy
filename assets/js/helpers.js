/*
**  Common helpers
*/

// Check if element has been defined or is non-null
export function exists(item) {
  return item !== null && item !== undefined
}

// Get by ID
export function getId(id, parent = document) {
  return parent.getElementById(id)
}

// Get by className
export function getClass(name, parent = document) {
  return parent.getElementsByClassName(name)
}
