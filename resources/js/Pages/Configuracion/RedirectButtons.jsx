import ButtonDiv from '@/Components/others/ButtonDiv';
import React from 'react';

const RedirectButtons = ({ title, createRoute, listRoute, createText, listText }) => {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden sm:rounded-lg">
                    <div className="justify-between lg:flex lg:flex-row md:flex md:flex-col">
                        <div className="w-full m-4">
                            <div className="p-6 flex flex-row justify-between border border-gray-200 rounded flex flex-col">
                                <h1 className='font-bold'>{title}:</h1>
                                <div className="mt-4 items-center flex justify-between lg:flex lg:flex-row md:flex md:flex-col">
                                    <ButtonDiv ruta={createRoute} text={createText} />
                                    <ButtonDiv ruta={listRoute} text={listText} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedirectButtons;
