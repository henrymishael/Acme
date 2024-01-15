import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { customers } from '@/app/lib/placeholder-data';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';


export const metadata: Metadata = {
    title: 'Customers',
}

export default async function Page(
    {
        searchParams,
    }: {
      searchParams?: {
        query?: string;
        page?: string;
      };
    }
) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;   

    const customers = await fetchFilteredCustomers(query);
    

    return  (
        <div>
                <CustomersTable customers={customers}  />
            
        </div>
      );
  }