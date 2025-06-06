import BaseControllerInterface from '@/interfaces/BaseControllerInterface';

const SampleController: BaseControllerInterface = {
    index(_req, res) {
        return res.json({
            'message' : 'This is as a sample response'
        });
    }
}

export default SampleController;