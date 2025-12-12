import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { List } from './features/products/pages/list/list';
import { Create } from './features/products/pages/create/create';
import { Edit } from './features/products/pages/edit/edit';
import { Details } from './features/products/pages/details/details';
import { ListCategories } from './features/categories/pages/list/list';
import { AddCategories } from './features/categories/pages/add/add';
import { EditCategories } from './features/categories/pages/edit/edit';
import { ListOrders } from './features/orders/pages/list/list';
import { PendingOrders } from './features/orders/pages/pending/pending';
import { OrderDetails } from './features/orders/pages/details/details';
import { CustomersList } from './features/customers/pages/list/list';
import { CustomerDetails } from './features/customers/pages/details/details';
import { Login } from './features/auth/pages/login/login';
import { ForgotPassword } from './features/auth/pages/forgot-password/forgot-password';
import { ResetPassword } from './features/auth/pages/reset-password/reset-password';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    // Dashboard
    { path: 'dashboard', component: MainLayout },

    // Products
    { path: 'products', component:  List},
    { path: 'products/add', component: Create },
    { path: 'products/edit/:id', component: Edit },
    { path: 'products/details/:id', component: Details },

    // Categories
    { path: 'categories', component: ListCategories },
    { path: 'categories/add', component: AddCategories },
    { path: 'categories/edit/:id', component: EditCategories },

    // Orders
    { path: 'orders', component: ListOrders },
    { path: 'orders/pending', component: PendingOrders },
    { path: 'orders/details/:id', component: OrderDetails },

    // Customers
    { path: 'customers', component: CustomersList },
    { path: 'customers/details/:id', component: CustomerDetails },

    // Auth
    { path: 'auth', component: AuthLayout, children: [
        { path: 'login', component: Login },
        { path: 'forgot-password', component: ForgotPassword },
        { path: 'reset-password', component: ResetPassword }
    ]},

    // Wildcard
    { path: '**', redirectTo: 'dashboard' }
];
