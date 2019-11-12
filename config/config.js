module.exports = {
    local_storage_key: 'node-react-aws-dynamodb',
    aws_user_table_name: 'usersTab',
    aws_user_session_table_name: 'userSessionsTab',
    aws_table_name: 'fruitsTab',
    aws_local_config: {
      region: 'local',
      endpoint: 'http://localhost:8000'
    },
    aws_remote_config: {
      accessKeyId: 'AKIAIUXYLG6JTPS2MQFQ',
      secretAccessKey: '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',
      region: 'us-east-1',
    },
    github_client_id: 'ba16139196a8a8c86cb4',
    github_client_secret: '5f516ced613cd8f8f9a69b1bcdc488c3f5c8e3fa',
    github_scope: 'user'
};