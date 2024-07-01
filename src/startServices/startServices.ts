import { spawn } from 'child_process';

const imageSkeletonization = spawn('bash', ['./src/startServices/start_image_skeletonization_service.sh']);

imageSkeletonization.stdout.on('data', (data) => { console.log(`stdout: ${data}`);});
imageSkeletonization.stderr.on('data', (data) => { console.error(`stderr: ${data}`); });
imageSkeletonization.on('close', (code) => { console.log(`child process exited with code ${code}`); });

