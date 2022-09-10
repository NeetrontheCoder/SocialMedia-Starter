import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={modalOpened} onClose={() => setModalOpened(false)}
        >
            <form className="infoForm">
                <h3>Your info</h3>
            </form>
        </Modal>
    );
}

export default ProfileModel;