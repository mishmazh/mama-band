import { bg_discography } from 'shared/lib/imagesImport';
import Image from 'shared/components/Image/Image';
import HeaderTitle from "entities/HeaderTitle/HeaderTitle";

const DiscographyPage = () => {
    return (
        <div>
            <Image src={bg_discography} alt="discography" isAbsolute />
            <HeaderTitle>Дискография</HeaderTitle>
        </div>
    );
};

export default DiscographyPage;
