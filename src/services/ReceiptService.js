import axios from 'axios';

const RECEIPTS_BASE_URL = "http://localhost:3000/receipts";

export class ReceiptService {

    getReceipt() {
        return axios.get(RECEIPTS_BASE_URL);
    }

    addReceipt(receipt) {
        return axios.post(RECEIPTS_BASE_URL, receipt);
    }

    getReceiptById(receiptId) {
        return axios.get(RECEIPTS_BASE_URL + '/' + receiptId);
    }

    updateReceipt(receipt, receiptId) {
        return axios.put(RECEIPTS_BASE_URL + '/' + receiptId, receipt);
    }

    deleteReceipt(receiptId) {
        return axios.delete(RECEIPTS_BASE_URL + '/' + receiptId)
    }
}

export default new ReceiptService()