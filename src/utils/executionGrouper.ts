const groupByFieldscontainer = (data: any) => {
  return data.list.items.reduce((a: any, b: any) => {
    const found = a.find((j: any) => j.fieldscontainer === b.fieldscontainer);
    if (found) {
      found.executions.push(b);
    } else {
      a.push({
        executions: [b],

        fieldscontainer: b.fieldscontainer
      });
    }

    return [...a];
  }, []);
};

export default groupByFieldscontainer;
