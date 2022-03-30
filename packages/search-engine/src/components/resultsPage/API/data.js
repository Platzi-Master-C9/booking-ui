const DATA_API = Array.from({ length: 60 }, (value, index) => {
  return { id: index, title: `Card #${index + 1}` }
})

export { DATA_API };
