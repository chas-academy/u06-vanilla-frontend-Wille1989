var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchDiscs() {
    return __awaiter(this, arguments, void 0, function* (searchTerm = '') {
        try {
            const url = searchTerm
                ? `https://u05-wbsp.onrender.com/api/discs/index?search=${encodeURIComponent(searchTerm)}`
                : `https://u05-wbsp.onrender.com/api/discs/index`;
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
            return data.data;
        }
        catch (error) {
            console.error('Couldnt get the discs', error);
            return [];
        }
    });
}
