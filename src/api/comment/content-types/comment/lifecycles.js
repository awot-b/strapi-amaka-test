module.exports = {
  afterCreate(event) {
    const { result, params } = event;
      strapi.entityService.create('api::ticket.ticket',
        {
            "data": {
                        "name":  result.description,
                        "price": 100,
                        "status": "Active",
                        "comment":  {connect: [result.id]}
                    },
        })
  },
};