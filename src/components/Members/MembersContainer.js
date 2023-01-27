import { Route, Routes } from 'react-router-dom';
import MemberItem from './MemberItem';
import NotFound from '../../pages/NotFound/NotFound';

const MembersContainer = () => {
    const masha = (
        <MemberItem member="masha" title="Мария Зальцман">
            <p>Клавишница со стажем. Может сыграть Франца Фердинанта с закрытыми глазами.</p>
            <p>
                Очень холодна и расчетлива, из-за чего участники группы думают, что она
                киборг-убийца, присланный из будущего. Хорошо владеет английским языком, даже лучше,
                чем русским.
            </p>
            <p>
                Мария может с легкостью вкатится в любую компанию, как нож в масло, поэтому
                рекомендуется использовать ее, если вам не достает еще парочки человек для вашей
                невероятной вечеринки, либо же, если вам нужна ширма для ванны.
            </p>
        </MemberItem>
    );

    const burda = (
        <MemberItem member="burda" title="Александр Бурда">
            <p>
                Гитарист, басист, барабанщик, клавишник, вокалист, солист, баскетболист,
                волейболист, футболист, нигилист, фаталист, монополист и многое-многое другое.
            </p>
            <p>
                К сожалению, данного текстового блока не хватит, чтобы рассказать о всех заслугах
                Александра, поэтому ограничимся лишь двумя процентами от общего количества.
            </p>
            <p>
                Увлекается музыкой с 0 лет и способен заменить любого участника этой группы,
                находится здесь только потому, что ему не с кем выпить пива.
            </p>
            <p>
                Имеет собственный проект “Atomic Submarine”, где записывает аудиокомпозиции для
                видеоигр и кино.
            </p>
        </MemberItem>
    );

    const misha = (
        <MemberItem member="misha" title="Михаил Маженин">
            <p>
                Начинающий барабанщик, хотя имеет дома ударную установку, которую ему привезли и
                собрали немцы.
            </p>
            <p>
                До сих пор не понимает, как открыл для себя мир барабанов и вообще в целом ничего не
                понимает.
            </p>
            <p>
                Любит пиццу с ананасами, в связи с этим является изгоем общества и порицается всеми
                участниками группы. Неисправимый оптимист, недопонятый гений, какой-то мужик и еще
                пару красивых слов.
            </p>
        </MemberItem>
    );

    const kres = (
        <MemberItem member="kres" title="Александр Крес">
            <p>
                Непревзойденный басист. Может играть только в перчатках из-за того, что любые
                музыкальные инструменты бьют его током.
            </p>
            <p>
                Долгое время пытался бросить курить и пить, что и привело его в группу. Толстые
                струны баса оказались лучшим лекарством, но от запоя он не избавился.
            </p>
            <p>
                Продал айфон, чтобы купить всем участникам группы инструменты, но в итоге хватило
                только на барабаны.
            </p>
            <p>В свое время сыграл эпизодическую роль шпаги Кота в сапогах в мультфильме "Шрек".</p>
        </MemberItem>
    );

    return (
        <Routes>
            <Route path="/masha" element={masha} />
            <Route path="/burda" element={burda} />
            <Route path="/misha" element={misha} />
            <Route path="/kres" element={kres} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MembersContainer;
