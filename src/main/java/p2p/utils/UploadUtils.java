package p2p.utils;

import java.util.Random;

public class UploadUtils {
    public static int generateCode(){
        int DYNAMIC_PORT_START = 49152;
        int DYNAMIC_PORT_END = 65535;

        Random random = new Random();
        return random.nextInt(DYNAMIC_PORT_END - DYNAMIC_PORT_START + 1) + DYNAMIC_PORT_START;
    }
}
