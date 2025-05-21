export function toRupiah(number: number) {
    return new Intl.NumberFormat("id-ID").format(number)
}