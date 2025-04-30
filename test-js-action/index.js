const core = require('@actions/core');

try {
    const name = core.getInput('name');
    console.log(`Wuddup, ${name}! `);
    const time = new Date().toISOString();
    core.setOutput('time', time);
}   catch (error) {
    core.setFailed(error.message);
}

