const core = require('@actions/core');

try {
    const name = core.getInput('name');
    const time = new Date().toISOString();

    console.log(`Wuddup, ${name}! `);
    core.setOutput('time', time);
}   catch (error) {
    core.setFailed(error.message);
}

