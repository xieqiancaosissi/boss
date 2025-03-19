import type {
  FieldType,
  FieldTypePromotion,
  FieldTypeBlacklist,
} from "../interfaces/interface";
const flipnDomain = "https://boss_stage.flipn.fun";
export async function addToken(params: FieldType) {
  const {
    authorization,
    account,
    address,
    icon,
    pool,
    price,
    ticker,
    token_decimals,
    token_name,
    token_supply,
    token_symbol,
    discord,
    about_us,
    tg,
    video,
    website,
    x,
  } = params;
  let queryString = `account=${account}&address=${address}&icon=${icon}&pool=${pool}&price=${price}&ticker=${ticker}&token_decimals=${token_decimals}&token_name=${token_name}&token_supply=${token_supply}&token_symbol=${token_symbol}`;
  if (discord) {
    queryString += `&discord=${discord}`;
  }
  if (about_us) {
    queryString += `&about_us=${about_us}`;
  }
  if (tg) {
    queryString += `&tg=${tg}`;
  }
  if (video) {
    queryString += `&video=${video}`;
  }
  if (website) {
    queryString += `&website=${website}`;
  }
  if (x) {
    queryString += `&x=${x}`;
  }
  return await fetch(flipnDomain + `/boss/v1/add/project?${queryString}`, {
    method: "POST",
    headers: {
      accept: "application/json; charset=UTF-8",
      Authorization: authorization,
    },
    body: "",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch(() => {
      return {
        code: "400",
        message: "bad request",
      };
    });
}

export async function doPromotion(params: FieldTypePromotion) {
  const { authorization, end_time, promotion_key, promotion_type } = params;

  let queryString = "";
  if (end_time) {
    queryString += `end_time=${end_time}`;
  }
  if (promotion_key) {
    queryString += `${queryString ? "&" : ""}promotion_key=${promotion_key}`;
  }
  if (promotion_type) {
    queryString += `${queryString ? "&" : ""}promotion_type=${promotion_type}`;
  }

  return await fetch(
    flipnDomain + `/boss/v1/promotion${queryString ? "?" : ""}${queryString}`,
    {
      method: "POST",
      headers: {
        accept: "application/json; charset=UTF-8",
        Authorization: authorization,
      },
      body: "",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch(() => {
      return {
        code: "400",
        message: "bad request",
      };
    });
}

export async function setBlackList(params: FieldTypeBlacklist) {
  const { authorization, address } = params;

  return await fetch(
    flipnDomain + `/boss/v1/blacklist/project?address=${address}`,
    {
      method: "POST",
      headers: {
        accept: "application/json; charset=UTF-8",
        Authorization: authorization,
      },
      body: "",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch(() => {
      return {
        code: "400",
        message: "bad request",
      };
    });
}
