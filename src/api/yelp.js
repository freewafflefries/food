import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer I6AuIx2fbOpCFYNUiI05hnrzLb4MguupOaIqNPKhDgjOyqPjF3d2STYvjg5u8_aGyHK_KwfnYsSMDt_TGBIUgRArAXd2GxEU8Ve9qcSGJyl_asGNwq75Ei_E3H9kYXYx'
    }
})

