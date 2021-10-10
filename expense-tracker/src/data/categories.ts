import { Category } from '../types/Category'

export const categories: Category = {
    rent: { title: 'Despesas', color: '#E40D0D', expense: true },
    sold: { title: 'Soldos', color: '#007ACC', expense: false},
    utils: { title: 'Utilidades', color: '#E40D0D', expense: true },     
    food: { title: 'Alimentação', color: '#E40D0D', expense: true },
}