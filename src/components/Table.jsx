import React from "react";
export default function Table(){
    return(
        <div className='h-[500px] w-[700px] bg-linear-to-tr'>
            <h1 className='text-center'>FIXED TABLE HEADER</h1>
            <table>
                <thead>
                    <tr>
                        <th className='p-2'>INVOICE</th>
                        <th className='p-2'>CUSTOMER</th>
                        <th className='p-2'>SHIP</th>
                        <th className='p-2'>PRICE</th>
                        <th className='p-2'>PURCHASED PRICE</th>
                        <th className='p-2'>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2'>1001</td>
                        <td className='p-2'>Mark Otto</td>
                        <td className='p-2'>Japan</td>
                        <td className='p-2'>$3000</td>
                        <td className='p-2'>$1200</td>
                        <td className='p-2'>progress</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}