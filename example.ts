// 明示的に型を制約する
function expo2(amount: number) {
    return amount * 2;
}

// const value = expo2('1000') // Error
const value = expo2(1000)
const withTax = value * 1.1 //NAN