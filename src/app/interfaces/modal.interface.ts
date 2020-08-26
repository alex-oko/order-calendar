export interface ModalInterface {
    id: string;
    title?: string;
    subtitle?: string;
    message?: string;
    class?: string;
    modalWithContent: boolean;
    isModalStatic?: boolean;
    preloader?: boolean;
    configAlert?: {
        icon?: string,
        colorIcon?: string
        title?: string,
        question?: string,
        message?: string
    };
}
