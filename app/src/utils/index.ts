import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formatMoney = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        value,
    ).replace('$', '$ ');
}