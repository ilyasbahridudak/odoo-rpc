import ODOO from './odoo-rpc'
import router from 'umi/router';

const host = '/api'
const db = 'TT'
const models = {
        'res.partner': ['name', 'company_id', 'category_id', 'parent_id', 'email', 'data',
                'create_data', 'phone', 'state_id', 'child_ids', 'image_small'],
        'res.company': ['name', 'email'],
        'res.country': ['name'],
        'res.users': ['name', 'doing_table_ids', 'channel_ids', 'login', 'partner_id', 'company_id', 'category_id'],
        'og.table': ['name', 'board_ids', 'channel_ids'],
        'og.board': ['name', 'state', 'number', 'player', 'hands', 'dealer', 'auction'],

        'bus.bus': ['name'],
        'mail.channel': ['name', 'uuid', 'channel_partner_ids', 'channel_type', 'channel_message_ids'],
        'mail.message': ['subject', 'body', 'subtype_id', 'message_type', 'author_id', 'date', 'channel_ids'],
        'og.channel': ['name', 'table_id', 'type', 'mail_channel_id'],
}

const odoo = new ODOO({ host, db, models })
odoo._rpc.callbackerror = (url, params, error) => {
        const errorData = { url, params, error };
        router.push({
                pathname: '/error',
                query: errorData
        });
};
export default odoo
