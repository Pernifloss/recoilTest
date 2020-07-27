const groupByFieldsContainer = (data: any) => {
  return data.list.items.reduce((a: any, b: any) => {
    const found = a.find((j: any) => j.key === b.fieldscontainer);
    if (found) {
      found.children.push({ title: b.id, ...b });
    } else {
      a.push({
        key: b.fieldscontainer,
        children: [{ title: b.id, ...b }],
        title: b.fieldscontainer
      });
    }

    return [...a];
  }, []);
};

export default groupByFieldsContainer;
