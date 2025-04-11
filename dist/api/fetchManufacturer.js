var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchManufacturer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://u05-wbsp.onrender.com/api/manufacturer/index');
            const data = yield response.json();
            console.log(data);
            return data.data;
        }
        catch (error) {
            console.error('Couldnt get the manufacturers', error);
            return [];
        }
    });
}
