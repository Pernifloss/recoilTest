import groupByFieldsContainer from "./executionGrouper";

const data = {
  list: {
    items: [
      {
        id: "365",
        date: "2020-07-27T14:18:49,0632Z",
        anonymizefield: "131",
        fieldscontainer: "129",
        sequential: "false",
        count: "100005",
        execsession: "453",
        time: "29439",
        status: "OK"
      },
      {
        id: "366",
        date: "2020-07-27T14:18:49,0633Z",
        anonymizefield: "133",
        fieldscontainer: "129",
        sequential: "false",
        count: "100005",
        execsession: "453",
        time: "29439",
        status: "OK"
      },
      {
        id: "367",
        date: "2020-07-27T14:19:15,0266Z",
        anonymizefield: "134",
        fieldscontainer: "105",
        sequential: "false",
        count: "100005",
        execsession: "453",
        time: "23524",
        status: "OK"
      }
    ],
    total: "3",
    count: "3",
    rank: "0"
  }
};
it("should group by fieldsContainerId", () => {
  expect(groupByFieldsContainer(data)).toEqual([
    {
      title: "129",
      key: "129",
      children: [
        {
          title: "365",
          id: "365",
          date: "2020-07-27T14:18:49,0632Z",
          anonymizefield: "131",
          fieldscontainer: "129",
          sequential: "false",
          count: "100005",
          execsession: "453",
          time: "29439",
          status: "OK"
        },
        {
          title: "366",
          id: "366",
          date: "2020-07-27T14:18:49,0633Z",
          anonymizefield: "133",
          fieldscontainer: "129",
          sequential: "false",
          count: "100005",
          execsession: "453",
          time: "29439",
          status: "OK"
        }
      ]
    },
    {
      title: "105",
      key: "105",
      children: [
        {
          title: "367",
          id: "367",
          date: "2020-07-27T14:19:15,0266Z",
          anonymizefield: "134",
          fieldscontainer: "105",
          sequential: "false",
          count: "100005",
          execsession: "453",
          time: "23524",
          status: "OK"
        }
      ]
    }
  ]);
});
