import { HOST } from 'Constants'

const signIn = async body => {
  try {
    let res = await fetch(`${HOST}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const signUp = async body => {
  try {
    let res = await fetch(`${HOST}/users/sign-up`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getListBrand = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/brand/list/${size}/${page}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const createBrand = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/brand/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getBrand = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/brand/get/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const editBrand = async (token, id, body) => {
  try {
    let res = await fetch(`${HOST}/brand/update/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteBrand = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/brand/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const createModel = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/model/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getListModel = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/model/list/${size}/${page}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getModel = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/model/get/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const editModel = async (token, id, body) => {
  try {
    let res = await fetch(`${HOST}/model/update/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteModel = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/model/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getListVariant = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/variant/list/${size}/${page}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const createVariant = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/variant/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getVariant = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/variant/get/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const editVariant = async (token, id, body) => {
  try {
    let res = await fetch(`${HOST}/variant/update/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteVariant = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/variant/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getListSupplier = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/supplier/list/${size}/${page}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const createSupplier = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/supplier/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getSupplier = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/supplier/get/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const editSupplier = async (token, id, body) => {
  try {
    let res = await fetch(`${HOST}/supplier/update/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteSupplier = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/supplier/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const createStockOrder = async (token, body) => {
  try {
    let res = await fetch(
      `${HOST}/stockReceivingOrder/stockReceivingOrderInfo/add`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify(body)
      }
    )

    return res
  } catch (error) {
    console.log(error)
  }
}

const getListOrderStock = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/stockReceivingOrder/list/${size}/${page}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteOrderStock = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/stockReceivingOrder/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getOrderStock = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/stockReceivingOrder/get/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const createOrderBill = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/orderBill/stockReceivingOrderInfo/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getListOrderBill = async (token, page, size = 10) => {
  try {
    let res = await fetch(`${HOST}/orderBill/list/${size}/${page}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteOrderBill = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/orderBill/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getOrderBill = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/orderBill/get/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getOrderBillDetail = async (token, id) => {
  try {
    let res = await fetch(`${HOST}/orderDetail/getByOrderBillId/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const checkOrderDetailValid = async (token, body) => {
  try {
    let res = await fetch(`${HOST}/orderDetail/checkOrderDetailValid`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(body)
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getVariantByModel = async (page = 0, id, size = 10) => {
  try {
    let res = await fetch(`${HOST}/model/list-by-id/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ''
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

const getVariantByBrand = async (page = 0, id, size = 10) => {
  try {
    let res = await fetch(`${HOST}/brand/list-by-id/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ''
      }
    })

    return res
  } catch (error) {
    console.log(error)
  }
}

export default {
  signIn,
  signUp,
  getListBrand,
  createBrand,
  getBrand,
  editBrand,
  deleteBrand,
  getListModel,
  createModel,
  getModel,
  editModel,
  deleteModel,
  getListVariant,
  createVariant,
  getVariant,
  editVariant,
  deleteVariant,
  getListSupplier,
  createSupplier,
  getSupplier,
  editSupplier,
  deleteSupplier,
  createStockOrder,
  getListOrderStock,
  deleteOrderStock,
  getOrderStock,
  createOrderBill,
  getListOrderBill,
  deleteOrderBill,
  getOrderBill,
  checkOrderDetailValid,
  getOrderBillDetail,
  getVariantByModel,
  getVariantByBrand
}
