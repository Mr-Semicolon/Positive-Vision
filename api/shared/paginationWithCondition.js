const {
  DEFAULT_LIMIT: PAGINATION_LIMIT_DEFAULT,
} = require("../../../config/serverConfig");
//  option argument is an object with three keys
//  the first key is the condition where
//  the second key is the attributes
//  the third key is the include
//  the fourth key is the raw
async function paginationwithCondition(model, req, option) {
  if (!model || !req || !option) {
    throw new Error(
      "The function should take 3 arguments model , req and option"
    );
  }
  // number of records per page
  let limit = Math.abs(Number(req.query.limit));
  //  limit = limit > 50 ? 10 : limit;
  if (!limit || limit >= 50 || Number.isNaN(limit)) {
    limit = PAGINATION_LIMIT_DEFAULT;
  }

  let page = Math.abs(Number(req.query.page));

  if (Number.isNaN(page)) {
    page = 1;
  }
  const error = {
    message: "",
    status: "",
  };
  let offset = 0 + (page - 1) * limit;
  option["limit"] = limit;
  option["offset"] = offset;
  const modelToPaginate = await model.findAndCountAll(option);
  const pages = Math.ceil(Number(modelToPaginate.count) / limit);
  const paginated = {
    result: modelToPaginate.rows,
    thisPage: page,
    allPages: pages,
    count: modelToPaginate.count,
  };
  return { paginated, error };
}
module.exports = {
  paginationwithCondition,
};
