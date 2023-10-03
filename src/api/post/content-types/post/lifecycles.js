module.exports = {
    beforeCreate(event) {
        const { data } = event.params;
        event.params.data = {...data, "user":  {connect: [1]}}
    },
    async afterCreate(event) {
      const { result } = event;
      strapi.entityService.create('api::comment.comment',
        {
            "data": {
                        "description":  result.title,
                        "post":  {connect: [result.id]}
                    },
        })
        
    },
  };