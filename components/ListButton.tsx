import PortalButton from "./Button";

export default function ListButton() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <PortalButton title="Portal BI" url="https://portalbi.equilibrioflorestal.com.br/portalbi" description="Portal de relatórios PowerBI" />
                
                <PortalButton title="Webmail" url="https://srvmail.equilibrioflorestal.com.br" description="Portal de e-mail web" />
                
                <PortalButton title="Effetivo" url="https://acesso.effettivo.com.br" description="Portal de controle de documentos" />
                
                <PortalButton title="EQControl" url="https://eqcontrol.equilibrioflorestal.com.br" description="Portal de controle de ativos" />
                
                <PortalButton title="Portal Request" url="https://erequest.equilibrioflorestal.com.br" description="Portal de requisições" />
                
                <div className="flex flex-row gap-2 w-full justify-center">
                    <PortalButton title="Ouvidoria" url="https://ouvidoria.equilibrioflorestal.com.br" description="Portal de ouvidoria" tooltipSide="left" />
                    
                    <PortalButton title="Ouvidoria (Admin)" url="https://ouvidoria.equilibrioflorestal.com.br/portal-ouvidoria" description="Portal de controle de ouvidoria" />
                </div>
            </div>
        </>
    );
}