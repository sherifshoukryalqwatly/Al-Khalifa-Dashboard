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
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { CoupnesList } from './features/coupons/pages/list/list';
import { EditCoupne } from './features/coupons/pages/edit/edit';
import { AddCoupne } from './features/coupons/pages/add/add';
import { InventoryList } from './features/inventory/pages/list/list';
import { AddInventory } from './features/inventory/pages/add/add';
import { EditInventory } from './features/inventory/pages/edit/edit';
import { Transactions } from './features/payments/pages/transactions/transactions';
import { Refunds } from './features/payments/pages/refunds/refunds';
import { Methods } from './features/shipping/pages/methods/methods';
import { Zones } from './features/shipping/pages/zones/zones';
import { ReviewList } from './features/reviews/pages/list/list';
import { ReviewReported } from './features/reviews/pages/reported/reported';
import { General } from './features/settings/pages/general/general';
import { Email } from './features/settings/pages/email/email';
import { Payment } from './features/settings/pages/payment/payment';
import { Store } from './features/settings/pages/store/store';
import { Analytics } from './features/analytics/pages/analytics/analytics';
import { Customers } from './features/analytics/pages/customers/customers';
import { Products } from './features/analytics/pages/products/products';
import { Sales } from './features/analytics/pages/sales/sales';
import { RefundDetails } from './features/payments/pages/refund-details/refund-details';
import { AddZones } from './features/shipping/pages/add-zones/add-zones';

export const routes: Routes = [
  // Redirect root
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // MAIN DASHBOARD LAYOUT
  {
    path: '',
    component: MainLayout,
    children: [
      // Dashboard home
      { path: 'dashboard', component: Dashboard },

      // Products
      { path: 'products', component: List },
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

      // Coupns
      { path: 'coupons', component: CoupnesList },
      { path: 'coupons/add', component: AddCoupne },
      { path: 'coupons/edit/:id', component: EditCoupne },

      // Inventory
      { path: 'inventory', component: InventoryList },
      { path: 'inventory/add', component: AddInventory },
      { path: 'inventory/edit/:id', component: EditInventory },

      // Payments
      { path: 'payments', component: Transactions },
      { path: 'payments/refunds', component: Refunds },
      { path: 'payments/refunds/details/:id', component: RefundDetails },

      // Shipping
      { path: 'shipping', component: Methods },
      { path: 'shipping/zones', component: Zones },
      { path: 'shipping/zones/add', component: AddZones },
  
      // Review
      { path: 'reviews', component: ReviewList },
      { path: 'reviews/reported', component: ReviewReported },

      // Settings
      { path: 'settings', component: General },
      { path: 'settings/email', component: Email },
      { path: 'settings/payment', component: Payment },
      { path: 'settings/store', component: Store },

      // Analytics
      { path: 'analytics', component: Analytics },
      { path: 'analytics/users', component: Customers },
      { path: 'analytics/products', component: Products },
      { path: 'analytics/sales', component: Sales },
    ]
  },

  // AUTH LAYOUT (separate)
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'forgot-password', component: ForgotPassword },
      { path: 'reset-password', component: ResetPassword }
    ]
  },

  // Wildcard
  { path: '**', redirectTo: 'dashboard' }
];

